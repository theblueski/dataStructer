
class Node {

    constructor(data, left, right) {
      this.data = data;
      this.left = left ;
      this.right = right;
    }
}


class BinarySearchTree {
    rootNode = null;

    constructor() {}
    
    insert(data) {
        const newNode = new Node(data);
        if(!this.rootNode) {
            this.rootNode = newNode
            return newNode;
        }
        let node = this.rootNode

        while(true) {
            if(node.data < data) {
                if(!node.right) {
                    node.right = newNode;
                    return newNode;
                }
                node = node.right;
            } else {
                if(!node.left) {
                    node.left = newNode;
                    return newNode;
                }
                node = node.left;
            }
        }
    }

    update() {

    }


    findNode(data) {

    }


    delete(data) {
        if(!this.rootNode) return

        let parentNode = null;
        let node = this.rootNode

        while(node && node.data != data) {
            parentNode = node;
            if(node.data < data) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        if(node == null) return

        if(node.left && node.right) {
            let smallestParent = node;
            let smallest = node.right;
            while (smallest.left) {
                smallestParent = smallest;
                smallest =smallest.left;
            }

            node.data = smallest.data;

            node = smallest;
            parentNode = smallestParent;
        }

        let child = node.left || node.right;

        if(!parentNode) {
            this.rootNode = child;
        } else if(parentNode.right === node) {
            parentNode.right = child;
        } else {
            parentNode.left = child;
        }

    }

    find(data) {
        let node = this.rootNode;
        if(!node) return
        while(node) {
            if(node.data < data) {
                node = node.right;
            } else if(node.data > data) {
                node = node.left;
            }
            return node;
        }
        return
    }

    preOrder(root) {
        let node = root;
        if(!node) return
        console.log(node.data);
        if(node.left) this.preOrder(node.left)
        if(node.right) this.preOrder(node.right)
    }

    inOrder(root) {
        let node = root;
        if(!node) return;
        if(node.left) this.inOrder(node.left);
        console.log(node.data);
        if(node.right) this.inOrder(node.right);
    }

    postOrder(root) {
        let node = root;
        if(!node) return;
        if(node.left) this.postOrder(node.left);
        if(node.right) this.postOrder(node.right);
        console.log(node.data)
    }
}

const datas = [33, 17, 13, 16, 18,25,50, 34, 58, 51, 66, 19, 27];

const searchTree = new BinarySearchTree()

datas.forEach(i => searchTree.insert(i))

// searchTree.inOrder(searchTree.rootNode);
console.log('************')

searchTree.delete(18);

searchTree.inOrder(searchTree.rootNode)

