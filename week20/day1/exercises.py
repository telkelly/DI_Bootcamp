class Door:
    def __init__(self):
        self.is_opened = False

    def open_door(self):
        self.is_opened = True

    def close_door(self):
        self.is_opened = False


class BlockedDoor(Door):
    def open_door(self):
        raise ValueError("Error: The door is blocked and cannot be opened.")

    def close_door(self):
        raise ValueError("Error: The door is blocked and cannot be closed.")
