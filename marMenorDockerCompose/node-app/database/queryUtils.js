

module.exports.getLimitedHistoric = async (model,limitField,limit,matchField,match) => {
    const matchQuery = {};
    if(matchField && match){
        matchQuery[matchField] = match;
    }
    return model.aggregate([
        { $match: { ...matchQuery } },
        { $sort: { observedAt: -1 } },
        {
            $limit: limit 
        }
    ]);
}
module.exports.getHistoricByDate = async (model, startDate, endDate, matchField, match) => {
    const matchQuery = {};
    if(matchField && match){
        matchQuery[matchField] = match;
    }

    return model.aggregate([
        {
            $match: {
                ...matchQuery,
            }
        },
        {
            $match: {
              observedAt: {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
              }
            }
          },
        
    ]);
};

// {
//     $project: {
//         _id: 0,  // Excluir el campo _id del resultado si no es necesario
//         measuredProperty:1,
//         controlledId:1,
//         sensorId:1,
//         "oldValues": {
//             $filter: {
//                 input: "$oldValues",
//                 as: "oldValue",
//                 cond: {
//                     $and: [
//                         { $gte: [{$dateFromString: {dateString: { $arrayElemAt: ["$$oldValue.observedAt", 0] }}}, new Date(startDate)] },
//                         { $lte: [{$dateFromString: {dateString: { $arrayElemAt: ["$$oldValue.observedAt", 0] }}}, new Date(endDate)] }
//                     ]
//                 }
//             }
//         }
//     }
// }