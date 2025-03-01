def toogle(s):
    res = ''
    for i in s:
        if i.isupper():
            res +=i.lower()
        elif i.islower():
            res +=i.upper()
        else:
            res+=i
    return res
s = input()
print(toogle(s))