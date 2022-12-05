const { PurchaseServices, UserServices } = require("../services");
const transporter = require("../utils/mailer");

const purchase = async (req, res, next) =>{
    try {
        const {userId} = req.params

        const data = Number(userId)

        const user = await UserServices.getOne(userId)
        const result = await PurchaseServices.createOrder(data)

        res.status(201).json(result)

        await transporter.sendMail({
            from: "<davidzambrano16@gmail.com>",
            to: result.email,
            subject: 'Bienvenido al Ecommers',
            text: `Welcome ${result.username}`,
            html: `<p>Welcome ${result.username}</p>`
          });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "purchase denied"
        })
    }
}

const getAll = async (req, res, next) => {
    try {
        const {userId} = req.params

        const data = Number(userId)
        console.log("ESTO ES DATA", data);
        const result = await PurchaseServices.seeOrders(data)
        res.json(result)

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "error"
        })
    }
}

module.exports = {
    purchase,
    getAll
}