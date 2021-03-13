

module.exports = (sequelize,Sequelize)=>{
    const Admin =sequelize.define("Admin",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        email:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        }
    })
    

    const Events = sequelize.define("Events",{
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:Sequelize.STRING
        },
        description:{
            type:Sequelize.STRING
        }
    })
    return Admin,Events;
}