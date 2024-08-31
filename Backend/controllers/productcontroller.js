const Product = require('../models/productmodels');
const mongoose= require("mongoose");

// Controller to get highest rated products by category
exports.getAllProducts = async (req, res) => {
    try {
        const Product = require('../models/productsmodel');
        console.log('Connected to collection:', Product.collection.name);

        // Log raw query results
        const products = await Product.find();
        console.log('Query results:', products);

        res.json(products);
    } catch (error) {
        console.error('Error fetching all products:', error.message);
        res.status(500).json({ message: 'Failed to fetch all products' });
    }
};

// Controller to get highest rated products by category
exports.getHighestRatedByCategory = async (req, res) => {
    try {
        const products = await Product.aggregate([
            { $sort: { category: 1, rating: -1 } },
            { $group: { _id: "$category", products: { $push: "$$ROOT" } } },
            { $project: { products: { $slice: ["$products", 6] } } }
        ]);
        res.json(products);
    } catch (error) {
        console.error('Error fetching highest rated products by category:', error.message);
        res.status(500).json({ message: 'Failed to fetch highest rated products by category' });
    }
};

// Controller to get highest ordered products by category
exports.getHighestOrderedByCategory = async (req, res) => {
    try {
        const products = await Product.aggregate([
            { $sort: { category: 1, numberOfOrders: -1 } },
            { $group: { _id: "$category", products: { $push: "$$ROOT" } } },
            { $project: { products: { $slice: ["$products", 3] } } }
        ]);
        res.json(products);
    } catch (error) {
        console.error('Error fetching highest ordered products by category:', error.message);
        res.status(500).json({ message: 'Failed to fetch highest ordered products by category' });
    }
};

// Controller to get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching all products:', error.message);
        res.status(500).json({ message: 'Failed to fetch all products' });
    }
};

// Controller to get top 8 rated products
exports.getTopRatedProducts = async (req, res) => {
    try {
        const products = await Product.find().sort({ rating: -1 }).limit(8);
        console.log(products)
        res.json(products);
    } catch (error) {
        console.error('Error fetching top rated products:', error.message);
        res.status(500).json({ message: 'Failed to fetch top rated products' });
    }
};