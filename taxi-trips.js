// const { Pool } = require("pg")

module.exports = function TaxiTrips(pool) {

    async function findAllRegions(){
       var regionResult = await pool.query(`select * from region`);
        return regionResult.rows                                                     
    }


    async function findTaxisForRegion(reg_name){
        taxis = await pool.query('select reg_name from region where id = $1',[reg_name])
        return taxis.rows
    }

    async function findTripsByRegNumber(reg_number){
        let trip = await pool.query('select count(*) trips from taxi where reg_number = $2',[reg_number])
        return trip.rowCount
    }	

    async function findTripsByRegion(reg_name){
        let trip_reg = await pool.query('select count(*) trips from taxi join region on region.region_name = taxi.id group by reg_name',[reg_name])
        return trip_reg.rowCount
    }


    async function totalTripCount(){
        let allTrips = await pool.query('select count(*)trips_number from taxi')
        return allTrips.rowCount
    }

    async function findTotalIncomePerTaxi(){

    }

    return{
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        totalTripCount,
        findTripsByRegion,
        findTotalIncomePerTaxi
    }
}