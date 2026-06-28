const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

function errorInput(a,b, res) {
    if (!a || !b) {
        return res.json({ error: "กรุณากรอกข้อมูลให้ครบถ้วน"})
    }
    
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return res.json({ error: "เฉพาะตัวเลขเท่านั้น"})
    }

    return true;
}

app.get('/add', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    if (errorInput(a,b, res) !== true) {
        return;
    };

    res.json({message: Number(a) + Number(b)});
})

app.get('/subtract', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    if (errorInput(a,b, res) !== true) {
        return;
    };

    res.json({message: Number(a) - Number(b)});
})

app.get('/multiply', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    if (errorInput(a,b, res) !== true) {
        return;
    };

    res.json({message: Number(a) * Number(b)});
})

app.get('/divide', (req, res) => {
    let a = req.query.a;
    let b = req.query.b;
    if (errorInput(a,b, res) !== true) {
        return;
    }

    if (Number(b) === 0) {
        return res.json({ error: "ไม่สามารถหารด้วยเลข 0 ได้"})
    }

    res.json({message: Number(a) / Number(b)});
})

app.listen(3001, () => {
  console.log('PORT 3001 :D');
});

// function Calculate(a, b, op) {
//     let result;
//     if (op === "+") {
//         result = a + b;
//     } else if (op === "-") {
//         result = a - b;
//     } else if (op === "*") {
//         result = a * b;
//     } else if (op === "/") {
//         if (b === 0) return { error: "ไม่สามารถหารด้วยเลข 0 ได้" };
//         result = a / b;
//     } else {
//         return { error: "เครื่องหมายไม่ถูกต้อง" };
//     }

//     return { value: result };

// }

// app.get('/', (req, res) => {
//     let a = req.query.a;
//     let b = req.query.b;
//     let op = req.query.op;

//     if (!a || !b || !op) {
//         return res.json({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" });
//     }

//     const allowedOps = ['+', '-', '*', '/'];
//         if (!allowedOps.includes(op)) {
//         return res.json({ error: "เครื่องหมายไม่ถูกต้อง" });
//     }

//     if (isNaN(Number(a)) || isNaN(Number(b))) {
//         return res.json({ error: "เฉพาะตัวเลขเท่านั้น" });
//     }

//     let calculation = Calculate(Number(a), Number(b), op);
//     if (calculation.error) {
//         res.json({ error: calculation.error });
//     } else {
//         res.json({ message: calculation.value });
//     }
// });