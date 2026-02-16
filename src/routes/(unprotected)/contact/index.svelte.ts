class ContactPageClass {
    public pendingStates = $state({
        contactIsPending: false
    })

    public contactInputs = $state({
        name: '',
        email: '',
        budget: '',
        message: '',
    })

    public resetContactFields = () => {
        this.contactInputs.name = '';
        this.contactInputs.email = '';
        this.contactInputs.budget = '';
        this.contactInputs.message = '';
    }
}

export const contactPageClass = new ContactPageClass();