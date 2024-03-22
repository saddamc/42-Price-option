import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Locker room access",
                "Towel service"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Access to sauna and steam room",
                "Personalized training sessions",
                "Nutritional counseling",
                "Priority booking for classes"
            ]
        },
        {
            "id": 3,
            "name": "Student Membership",
            "price": 25,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Valid student ID required",
                "Locker room access"
            ]
        },
        {
            "id": 4,
            "name": "Family Membership",
            "price": 80,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Access to group fitness classes",
                "Discounted rates for additional family members",
                "Childcare services",
                "Family workout sessions"
            ]
        }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-4 gap-6">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;