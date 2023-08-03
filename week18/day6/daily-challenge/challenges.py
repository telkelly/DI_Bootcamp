# challenge 1

# users_word = input("Type a word:")
#
# letter_idx_dict = {}
#
# for idx, letter in enumerate(users_word):
#     if letter in letter_idx_dict:
#         letter_idx_dict[letter].append(idx)
#     else:
#         letter_idx_dict[letter] = [idx]
#
#
# print(letter_idx_dict)

# challenge 2

items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$1200"

wallet_amount = int(wallet.strip("$").replace(",",""))
affordable_items = []

for key, value in items_purchase.items():
    item_price = int(value.strip("$").replace(",", ""))
    if item_price <= wallet_amount:
        affordable_items.append(key)
        wallet_amount -= item_price

print(affordable_items)