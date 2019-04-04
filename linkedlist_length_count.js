function Node(data) {
    this.data = data;
    this.next = null;
}

function length(head) {
    // Your code goes here.
    if (head == null) return 0

    var count = 1
    var current = head
    while (current.next != null) {
        count++
        current = current.next
    }
    return count
}

function count(head, data) {
    // Your code goes here.
    if(head == null) return 0

    var count = 0
    while (head) {
        if (head.data === data) {
            count++
            head = head.next
        }
    }
    return count
}