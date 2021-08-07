
//----------------- Создание Linked List ----------------------------



class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Первый элемент
        this.tail = null; // Последний элемент
    }

    // Добавляем элементы вконец списка
    append(data) {
        const node = new Node(data); // Т.к next = null, то второй параметр не передаём

        
        if (this.tail) {
            this.tail.next = node;
        // Если tail присутствует, то необходимо у прошлого элемента вконце указать следующее:
        //  node = {data, next: null}. По той причине, что он теперь должен являться последним.
        }

        // Если  не определён this.head 
        if (!this.head) {
            this.head = node; 
        }

        // node теперь должен стать последним элементом. 
        this.tail = node;
    }
    

    // Добавляем элемент в начало списка
    prepend(data) {
        const node = new Node(data, this.head); // { data, next: this.head }

        // Т.к node,  стала первым элементом, то:
        this.head = node;

        // Если  вызвали prepend(), когда список не определён
        if (!this.tail) {
            this.tail = node;
        }
    }

    // Вставляем новый элемент, после указанного элемента. Делаем это с помощью метода find()
    insertAfter(after, data) {
        const found = this.find(after);

        // Если ничего не найдено
        if (!found) {
            return;
        }

        // Далее создаём новый элемент  списка
        const node = new Node(data, found.next);
        found.next = node;
    }
    

    // Находим определённые элементы в  связанном списке
    find(data) {
        if(!this.head) { // Если список пустой
            return; 
        }

        // Создадим переменную - указатель, которая будет указателем на 1-й элемент в нашем связанном списке
        let current = this.head;
        while (current) {
            if (current.data === data) { 
                return current;
            }
            current = current.next; // Если не найдено совпадения (если не нашли нужный элемент)
        }
    }

    // Удаляем элемент из списка
    remove(data) {
        if(!this.head) {
            return;
        }
    
    while (this.head && this.head.data === data) {
        this.head = this.head.next;
    } 
    // В параметрах цикла while делаем доп проверку this.head (т.к будем его менять)


    // Так же стоит учесть наличие однотипных элементов (одинаковые значения),
    let current = this.head;
    while (current.next) { 
        if (current.next.data === data) { 
            
            current.next = current.next.next;
            // Т.е если найдены совпадения, то мы просто пропускаем один элемент для current.next
        } else { 
            current = current.next; // берём следующий элемент по списку
        }
    }
    
    // Проверка для последнего элемента
    if (this.tail.data === data) { 
        this.tail = current; 
        // Присваиваем current, т.к в нём содержится предпоследний элемент,который прошёл проверку
    }

    }

    // Приводим связанный список к массиву
    toArray() {
        const output = [];
        let current = this.head; 

        while (current) {
            output.push(current);
            current = current.next;
            // Когда итерация закончится - current будет равен next

            return output;
        }
        
    }
}

const list = new LinkedList();


