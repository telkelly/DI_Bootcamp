def divide_by_zero():
    try:
        result = 5 / 0
        return result
    except ZeroDivisionError as e:
        print("Error: Division by zero is not allowed.")
        return None

result = divide_by_zero()
if result is not None:
    print("Result:", result)