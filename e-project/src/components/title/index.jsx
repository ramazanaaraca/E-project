function Title({children}) {
    return (
        <>
            <div className="flex items-center justify-between py-12">
                <h2 className="lg:text-4xl text-2xl font-medium">New Arrivals</h2>
                {children}
            </div>
        </>
    )
}

export default Title