def bubble_Sort(arr):
    n = len(arr)
    
    for i in range(n):
        
        for j in range(n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1],arr[j]
     
    return arr

arr = list(map(int, input().split()))
print(*bubble_Sort(arr))
