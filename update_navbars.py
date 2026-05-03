import os
import re

directory = r"c:\Users\lenovo\Documents\CHATORA-AF"

navbar_css = """
:root {
  --fire: #ff512f;
  --gold: #f09819;
  --grad: linear-gradient(135deg, #ff512f, #f09819);
  --dark: #0d0d0d;
  --card-bg: #161616;
  --surface: #1e1e1e;
  --border: rgba(255,255,255,0.07);
  --text: #f0f0f0;
  --muted: #888;
  --radius: 18px;
}

/* ===== NAVBAR ===== */
.navbar {
  position: fixed; top:0; left:0; right:0; z-index:999;
  display:flex; align-items:center; justify-content:space-between;
  padding:16px 48px;
  background: rgba(13,13,13,0.88);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border);
  color: var(--text);
}
.navbar, .navbar * {
  font-family: 'DM Sans', sans-serif;
  box-sizing: border-box;
}
.nav-logo {
  font-family:'Syne',sans-serif; font-size:22px; font-weight:800;
  background:var(--grad); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}
.nav-search {
  display:flex; align-items:center; gap:10px;
  background:var(--surface); border:1px solid var(--border);
  border-radius:50px; padding:10px 18px; width:300px;
  transition:border .3s;
}
.nav-search:focus-within { border-color:var(--fire); }
.nav-search input { background:none; border:none; outline:none; color:var(--text); font-family:'DM Sans',sans-serif; font-size:14px; width:100%; }
.nav-search i { color:var(--muted); font-size:14px; }
.nav-loc { display:flex; align-items:center; gap:6px; color:var(--muted); font-size:13px; }
.nav-loc select { background:none; border:none; outline:none; color:var(--text); font-family:'DM Sans',sans-serif; font-size:13px; cursor:pointer; }
.nav-links { display:flex; align-items:center; gap:4px; }
.nav-links a { color:var(--muted); font-size:13px; padding:8px 10px; border-radius:8px; transition:all .2s; white-space:nowrap; text-decoration:none; }
.nav-links a:hover { color:var(--text); background:var(--surface); }
.nav-links .cart { background:var(--grad); color:white; padding:8px 18px; border-radius:50px; font-weight:600; }
.nav-links .cart:hover { opacity:.9; color:white; background:var(--grad); }

@media(max-width:1024px){
  .navbar{padding:14px 20px;}
  .nav-search{width:200px;}
}
@media(max-width:768px){
  .nav-search,.nav-loc,.hm{display:none;}
}

/* Adjust body padding so navbar doesn't overlap content */
body {
  padding-top: 80px;
}
"""

with open(os.path.join(directory, "navbar.css"), "w", encoding="utf-8") as f:
    f.write(navbar_css)

with open(os.path.join(directory, "homepage.html"), "r", encoding="utf-8") as f:
    homepage_content = f.read()

# Extract navbar HTML
navbar_match = re.search(r'(<!-- NAVBAR -->\s*<nav class="navbar">.*?</nav>)', homepage_content, re.DOTALL)
if not navbar_match:
    print("Could not find navbar in homepage.html")
    exit(1)
navbar_html = navbar_match.group(1)

html_files = [f for f in os.listdir(directory) if f.endswith(".html")]

for filename in html_files:
    if filename == "homepage.html":
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    modified = False

    # Insert CSS link
    if 'href="navbar.css"' not in content:
        content = content.replace("</head>", '  <link rel="stylesheet" href="navbar.css">\n</head>')
        modified = True

    # Check if there is already a navbar
    if '<nav class="navbar">' in content:
        content = re.sub(r'<!-- NAVBAR -->\s*<nav class="navbar">.*?</nav>', navbar_html, content, flags=re.DOTALL)
        content = re.sub(r'<nav class="navbar">.*?</nav>', navbar_html, content, flags=re.DOTALL)
        modified = True
    else:
        # Insert after <body>
        content = re.sub(r'(<body[^>]*>)', r'\1\n\n' + navbar_html + '\n', content, count=1, flags=re.IGNORECASE)
        modified = True
    
    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {filename}")

print("Done.")
