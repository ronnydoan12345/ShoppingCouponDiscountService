const coupons = {
    SAVE10: 0.10,
    SAVE20: 0.20,
    SAVE50: 0.50
};

const validateCoupon = (req, res) => {
    const { couponCode } = req.body;

    if (coupons[couponCode]) {
        return res.status(200).json({
            valid: true
        });
    }

    return res.status(400).json({
        valid: false,
        message: "Invalid coupon code"
    });
};

const applyCoupon = (req, res) => {
    const { couponCode, orderTotal } = req.body;

    if (!coupons[couponCode]) {
        return res.status(400).json({
            message: "Invalid coupon code"
        });
    }

    const discountRate = coupons[couponCode];
    const discountAmount = orderTotal * discountRate;
    const discountedTotal = orderTotal - discountAmount;

    return res.status(200).json({
        originalTotal: orderTotal,
        discountAmount,
        discountedTotal
    });
};

module.exports = {
    validateCoupon,
    applyCoupon
};