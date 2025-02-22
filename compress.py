#A string is given compress the string and print the frequencies along with the character 
# smaple input : aaabbccd
# sample output

hashmap = {}  
s = input()  

for i in s:  
    hashmap[i] = hashmap.get(i, 0) + 1  #.get(i, 0) → If the character i is already in hashmap, it returns its current count.Otherwise, it returns 0 (default value).

for key, value in hashmap.items(): 
    print(str(key)+str(value), end="")  

