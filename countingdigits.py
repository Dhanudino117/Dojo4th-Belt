s = input()

alphabets = numbers = specialcharacter = 0

for char in s:
    if char.isalpha():
        alphabets +=1
    elif char.isdigit():
        numbers +=1
    else:
        specialcharacter +=1
    
print(alphabets, numbers, specialcharacter)   