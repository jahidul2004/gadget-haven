import React from "react";

const Faq = () => {
    return (
        <div>
            <div className="bg-[#9538e1] py-5 text-white text-center">
                <h1 className="text-4xl font-bold mb-3">
                    Frequently Asked Question
                </h1>
                <p className="font-semi-bold">
                    Asked your question here or find out your queries <br />{" "}
                    from this question bellow.
                </p>
            </div>
            <div className="flex flex-col gap-2 my-5">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Why Choose Gadget Haven?
                    </div>
                    <div className="collapse-content">
                        <p>Gadget Haven offers an extensive collection of gadgets, including the latest smartphones, laptops, MacBooks, and other electronics from top brands. This ensures that customers can find exactly what they’re looking for, whether it's a specific model or a high-performance device</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    How many items order at a time?
                    </div>
                    <div className="collapse-content">
                        <p>There are no Limits to order product at a time.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How many catagories is available in gadget haven?
                    </div>
                    <div className="collapse-content">
                        <p>There are many categories available.Like- <br />1.Phone <br />2.Laptop <br />3.Macbook.Etc.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How can I payment for my order?
                    </div>
                    <div className="collapse-content">
                        <p>Yoy can payment many ways.like- <br />1.Bkash <br />2.Nagad <br />3.Bank payment <br />4.Cash On Delivery <br />5.And many more.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I return a product after I buy this?
                    </div>
                    <div className="collapse-content">
                        <p>Yes.You can return a product after buy within 7 days.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
