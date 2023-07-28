my_dog = {
  'name': 'Rufus',
  'age': 4,
  'good_dog': True
}

# print(my_dog)
# print(my_dog['name'])
# print(my_dog['age'])
# print(my_dog.get(['color', 'white']))

sample_dict = {
   "class":{
      "student":{
         "name":"Mike",
         "marks":{
            "physics":70,
            "history":80
         }
      }
   }
}

print(sample_dict['class']['student'])

print(sample_dict['class']['student']['marks']['history'])

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

del sample_dict['name']
del sample_dict['salary']

for key_to_remove in keys_to_remove:
    if key_to_remove in sample_dict:
        del sample_dict[key_to_remove]
    else:
        print(f"the key {key_to_remove} is not exist")

print(sample_dict)