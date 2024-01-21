// Please don't change the pre-written code
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  try{
const orderData=req.body;
const newOrder=await createNewOrderRepo(orderData);
res.status(201).json({
  success:true,
  order:newOrder,
})
  }catch(error){
    next(new ErrorHandler(500,"Error creating a new Order",error.message));
  }
};
