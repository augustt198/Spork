walk(document.body);

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;
    
    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(/\bFork\b/g, 'Spork');
    v = v.replace(/\bfork\b/g, 'spork');
    v = v.replace(/\bforking\b/g, 'sporking');
    v = v.replace(/\bForking\b/g, 'Sporking');
    v = v.replace(/\bfork\b/g, 'sporked');
    v = v.replace(/\bFork\b/g, 'Sporked');

    textNode.nodeValue = v;
}