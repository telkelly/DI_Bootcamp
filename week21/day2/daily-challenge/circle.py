import math as m
import turtle


class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Either radius or diameter must be provided")

    @property
    def diameter(self):
        return self.radius * 2

    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2

    @property
    def area(self):
        return m.pi * self.radius ** 2

    def __str__(self):
        return f"Circle with radius: {self.radius}"

    def __repr__(self):
        return f"Circle({self.radius})"

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __le__(self, other):
        return self.radius <= other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __gt__(self, other):
        return self.radius > other.radius

    def __ge__(self, other):
        return self.radius >= other.radius


circle1 = Circle(radius=5)
circle2 = Circle(diameter=10)
circle3 = Circle(radius=3)
circle4 = Circle(diameter=6)

print(circle1.diameter)
circle2.diameter = 16
print(circle2.radius)
print(circle3.area)
print(circle1 + circle3)
print(circle4 > circle2)
print(circle1 == circle3)

circles = [circle1, circle2, circle3, circle4]
sorted_circles = sorted(circles)
print(sorted_circles)


# bonus
def draw_circle(circle, color):
    turtle.penup()
    turtle.goto(0, -circle.radius)
    turtle.pendown()
    turtle.color(color)
    turtle.circle(circle.radius)


turtle.speed(0)
turtle.bgcolor("white")

colors = ["blue", "green", "red", "purple"]
for i, circle in enumerate(sorted_circles):
    draw_circle(circle, colors[i])

turtle.exitonclick()
