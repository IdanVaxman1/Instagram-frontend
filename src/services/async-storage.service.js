

export const storageService = {
    query,
    get,
    postMany,
    put,
    remove,
    getUser,
    addComment,
    getPost
}

// localStorage.setItem('PostDB', JSON.stringify(story()))


function query(entityType, delay = 600) {

    var entities = JSON.parse(localStorage.getItem(entityType))

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}

function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.filter(entity => entity.by._id === entityId))
}


function getPost(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}


function getUser(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}



// function post(entityType, newEntity) {
//     newEntity._id = _makeId()
//     return query(entityType)
//         .then(entities => {
//             entities.push(newEntity)
//             _save(entityType, entities)
//             return newEntity
//         })
// }

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function addComment(entityType, entityId, newEntities) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            console.log(idx);
            entities[idx].comments.push(newEntities)
            _save(entityType, entities)
        })
}



function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            // newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            // newEntities = [...newEntities ,  {id : _makeId()}]
            entities.unshift(newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}


