import React from 'react'
import img_view from '../img/icons/32x32/view.png'

class ExpenseCategories extends React.Component {

    onView = (expense_category) => {
        this.props.onDataSelection("Expense Category", expense_category);
    }

    render() { 
        return (
            <main>
                <section className="outstanding-invoices">
                    <h6>Expense Categories</h6>
                    <ul>
                        <li>
                            <p className="heading">Name</p>
                        </li>
                        <li>
                            <p className="heading">Description</p>
                        </li>
                        <li>
                            <p className="heading">View</p>
                        </li>
                    </ul>
                    { 
                        this.props.expense_categories.map(expense_category =>
                            <ul className="ul-lines" key={expense_category.expense_category_id}>
                                <li>
                                    <p>{expense_category.name}</p>
                                </li>
                                <li>
                                    <p>{expense_category.description}</p>
                                </li>
                                <li>
                                    <a href="/#" onClick={() => this.onView(expense_category)}>
                                        <img src={img_view} alt="View" title="View"/>
                                    </a>
                                </li>
                            </ul>
                        )
                    }
                </section>
            </main>
        );
    }    
}

export default ExpenseCategories;