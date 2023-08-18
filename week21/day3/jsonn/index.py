import json

with open("file.json") as f:
    family = json.load(f)

print(family)
for i, child in enumerate(family['children']):
    print(f"Name: {child['firstName']}, age: {child['age']}")
    child['favorite_color'] = 'blue'
    family["children"][i] = child

with open("file.json", 'w') as f:
    json.dump(family, f, indent=2)