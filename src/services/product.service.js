const ProductManager = require("../DAO/fileSystem/ProductManager")
const ProductDAO = require("../DAO/mongo/product-dao.mongo")

const Product = new ProductDAO()
//const Product = new ProductManager("./src/productos.json")

const getAll = async () => {
    try {
        const products = await Product.allProducts()
        
        return products
    } catch (error) {
        throw error
    }
}

const getOneById = async pid => {
    try {
        const productFound = await Product.oneProductById(pid)

        return productFound
    } catch (error) {
        throw error
    }
}

const insertOne = async newProductInfo => {
    try {
        newProductInfo.createdAt = new Date()
        newProductInfo.updatedAt = new Date()

        const newProduct = await Product.newProduct(newProductInfo)

        return newProduct
    } catch (error) {
        throw error
    }
} 

const updateOne = async (pid, productInfo) => {
    try {
        const productUpdate = await Product.updateProduct(pid, productInfo)

        return productUpdate
    } catch (error) {
        throw error
    }
}

const deleteOne = async (pid, newStatus) => {
    try {
        const productDeleted =  await Product.deleteProduct(pid, newStatus)
        
        return productDeleted
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAll,
    getOneById,
    insertOne, 
    updateOne,
    deleteOne,
}