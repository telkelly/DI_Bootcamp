class Family:
    def __init__(self, *members_data, last_name):
        self.members = []
        for data in members_data:
            member_dict = {
                "name": data[0],
                "age": data[1],
                "gender": data[2],
                "is_child": data[3]
            }
            self.members.append(member_dict)
        self.last_name = last_name

    def display_members(self):
        for member in self.members:
            print(
                f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is Child: {member['is_child']}")

    def born(self, **data):
        self.members.append(data)
        print(f"Congratulations! {data['name']} was born into the family.")

    def is_18(self, member_name):
        for member in self.members:
            if member['name'] == member_name:
                return member['age'] >= 18
        return False

    def family_presentation(self):
        print(f"Family Last Name: {self.last_name}")
        for member in self.members:
            print(f"First Name: {member['name']}")



my_family = Family(('Michael', 35, 'Male', False), last_name='Konnovich')
my_family2 = Family(("Sarah", 32, 'Female', False),('Alex',10, 'Male', True), last_name='Miller')

my_family.born(name="Anna", age=0, gender='Female', is_child=True)
my_family.display_members()
my_family2.family_presentation()
print(my_family2.is_18('Sarah'))

class TheIncredibles(Family):
    def __init__(self, *members_data, last_name):
        self.members = []
        for data in members_data:
            member_dict = {
                "name": data[0],
                "age": data[1],
                "gender": data[2],
                "is_child": data[3],
                "power": data[4],
                "incredible_name": data[5]
            }
            self.members.append(member_dict)
        self.last_name = last_name

    def use_power(self, power):
        for member in self.members:
            if member['age'] > 18:
                return print(f"Your power is {member['power']}")
            raise Exception("You are not allowed to have power")

    def incredible_presentation(self):
        super().family_presentation()
        print("Members' Incredible Names and Powers: ")
        for member in self.members:
            print(f"Name: {member['incredible_name']}, Power: {member['power']}")



incredible_members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredible_family = TheIncredibles(('Michael', 35, 'Male', False, 'fly', 'MikeFly'), last_name='Parr')
incredible_family2 = TheIncredibles(('Sarah', 32, 'Female', False, 'read minds', 'SuperWoman'), last_name='Clerk')

try:
    incredible_family.use_power('MikeFly')
except Exception as e:
    print(e)

try:
    incredible_family.use_power('SuperWoman')
except Exception as e:
    print(e)


incredible_family.born('Jack', 2, 'Male', True, 'Unknown Power', 'SuperBaby')
incredible_family.incredible_presentation()