class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LL:
    def __init__(self):
        self.head = None

    # add last

    def addLast(self, data):
        newNode = Node(data)
        if self.head is None:
            self.head = newNode
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = newNode

    # print

    def display(self):
        temp = self.head
        while temp:
            print(temp.data, end="->")
            temp = temp.next

ll = LL()
n = 5
arr = [2, 3, 6, 1, 7]

for i in range(n):
    ll.addLast(arr[i])

ll.display()
