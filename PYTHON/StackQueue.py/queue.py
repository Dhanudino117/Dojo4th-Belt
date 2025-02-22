def enqueue(queue, item):
    queue.append(item)  # Add item to the rear

def dequeue(queue):
    if queue:
        return queue.pop(0)  # Remove item from the front
    return None  # Return None if queue is empty

# Taking input
N = int(input())  # Number of elements
elements = list(map(int, input().split()))  # Space-separated integers

# Creating an empty queue
queue = []

# Enqueue all elements
for el in elements:
    enqueue(queue, el)

# Dequeue and print elements
for _ in range(N):
    print(dequeue(queue), end=' ')
