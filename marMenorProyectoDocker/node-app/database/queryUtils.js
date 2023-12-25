

module.exports.getLimitedHistoric = async (model,limitField,limit,matchField,match) => {
    const matchQuery = {};
    matchQuery[matchField] = match;

    return model.aggregate([
        { $match: { ...matchQuery } },
        { $project: { oldValues: { $slice: [limitField, limit] }, "measuredProperty": 1, "controlledId": 1, "sensorId": 1 } }
    ]);
}
module.exports.getHistoricByDate = async (model, startDate, endDate, matchField, match) => {
    const matchQuery = {};
    matchQuery[matchField] = match;

    return model.aggregate([
        {
            $match: {
                ...matchQuery,
            }
        },
        {
            $project: {
                _id: 0,  // Excluir el campo _id del resultado si no es necesario
                measuredProperty:1,
                controlledId:1,
                sensorId:1,
                "oldValues": {
                    $filter: {
                        input: "$oldValues",
                        as: "oldValue",
                        cond: {
                            $and: [
                                { $gte: ["$$oldValue.observedAt", new Date(startDate)] },
                                { $lte: ["$$oldValue.observedAt", new Date(endDate)] }
                            ]
                        }
                    }
                }
            }
        }
    ]);
};