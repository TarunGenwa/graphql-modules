





























// const _ = require('lodash')
// const SequelizeModel = require('./sequelize.model')

// const AbstractAllModels = module.exports.AbstractAllModels = (models) => {
//     let fmodels = {}
//     for(let key in models){
//         let model = models[key];
//         let modelName = model.name
//         if(!modelName) continue;

//         if(fmodels[model.name]) throw `duplicate model name: ${model.name}`;

//         // let associations = loadAssociations(model);
//         // let properties   = loadProperties(model);
//         // let options      = loadOptions(model);

// //        let attributes = _.merge(properties, associations);
//         let info = {
//             type                :'sequelize',
//             name                : model.name,
//             objectKey           : key,
// //            attributes          : attributes,
//             model               : model,
// //          options             : options,
//         }

//         let newModel = new SequelizeModel(info);
//         fmodels[newModel.capName] = newModel;
//     }
//     return fmodels;
// }

// const loadProperties = module.exports.loadProperties = () => {

// }
// const loadAssociations = module.exports.loadAssociations = () => {
    
// }

// const options = module.exports.options = () => {
    
// }