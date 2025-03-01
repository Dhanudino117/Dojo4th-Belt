def enqueue(queue, item):
    queue.append(item)  

def dequeue(queue):
    if queue:
        return queue.pop(0)  
    return None  


N = int(input())  
elements = list(map(int, input().split()))  

queue = []


for el in elements:
    enqueue(queue, el)


for _ in range(N):
    print(dequeue(queue), end=' ')
