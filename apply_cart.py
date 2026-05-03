import os
import re

directory = r"c:\Users\lenovo\Documents\CHATORA-AF"

# 1. Update HTML files
html_files = [f for f in os.listdir(directory) if f.endswith(".html")]

for filename in html_files:
    if filename == "cart.html":
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    modified = False

    # Replace old Cart link
    if 'href="#" class="cart"' in content:
        content = content.replace('href="#" class="cart"', 'href="cart.html" class="cart"')
        modified = True

    # Inject cart.css if not present
    if 'href="cart.css"' not in content:
        content = content.replace('</head>', '  <link rel="stylesheet" href="cart.css">\n</head>')
        modified = True

    # Inject cart.js if not present
    if 'src="cart.js"' not in content:
        # insert right before </body>
        if '</body>' in content:
            content = content.replace('</body>', '<script src="cart.js"></script>\n</body>')
        else:
            # if </body> is missing, append to end
            content += '\n<script src="cart.js"></script>'
        modified = True

    if modified:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated HTML: {filename}")

# 2. Remove order function from _menu.js files
js_files = [f for f in os.listdir(directory) if f.endswith("_menu.js")]

for filename in js_files:
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Regex to find function order(name) { ... }
    # This assumes simple function body as seen in the examples
    new_content = re.sub(r'function\s+order\s*\([^)]*\)\s*\{[^}]*\}', '', content, flags=re.MULTILINE|re.DOTALL)
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Removed order() from JS: {filename}")

print("Cart injection complete.")
