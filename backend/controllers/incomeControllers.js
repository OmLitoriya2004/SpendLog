const Income = require("../models/Income.js");
const xlsx = require("xlsx");

exports.addIncome = async (req, res) => {
  const userId = req.user.id;
  try {
    const { icon, source, amount, date } = req.body ||{};
    if (!source || !amount || !date) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newIncome = new Income({
      userId,
      icon,
      source,
      amount,
      date: new Date(date),
    });

    await newIncome.save();
    res.status(200).json(newIncome);
  } catch (e) {
    console.error("Error in addIncome Controller", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getAllIncome = async (req, res) => {
    const userId=req.user.id;
    try {
        const income = await Income.find({userId}).sort({date:-1});
        res.status(200).json(income);
    } catch (e) {
        console.error("Error in geAllIncome controller",e);
        res.status(500).json({message:"Internal Server Error"});
    }
};

exports.deleteIncome = async (req, res) => {
    try {
        await Income.findByIdAndDelete(req.params.id);
        res.json({message : "Income deleted Successfully"});
    } catch (e) {
        console.error("Error in deleting income", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.downloadIncomeExcel = async (req, res) => {
    const userId = req.user.id;
    try {
        const income =await Income.find({userId}).sort({date : -1});
        const data = income.map((item)=>({
            Source : item.source,
            Amount : item.amount,
            Date : item.date,
        }))

        const wb = xlsx.utils.book_new();
        const ws=xlsx.utils.json_to_sheet(data);
        xlsx.utils.book_append_sheet(wb,ws,"Income");
        xlsx.writeFile(wb,'income_details.xlsx');
        res.download("income_details.xlsx");
    } catch (e) {
        console.error("Error in downloading income sheet", e);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
