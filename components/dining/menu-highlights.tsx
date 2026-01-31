const menuCategories = [
  {
    title: "Breakfast Specials",
    items: [
      { name: "South Indian Thali", description: "Traditional breakfast platter with idli, dosa, vada, sambar, and chutneys", price: "₹450" },
      { name: "Continental Breakfast", description: "Eggs your way, bacon, toast, fresh fruits, and juice", price: "₹550" },
      { name: "Health Bowl", description: "Quinoa, fresh berries, nuts, and honey with Greek yogurt", price: "₹400" },
    ],
  },
  {
    title: "Signature Dishes",
    items: [
      { name: "Chettinad Chicken", description: "Authentic Chettinad spiced chicken with aromatic rice", price: "₹750" },
      { name: "Grilled Sea Bass", description: "Fresh catch with herbs, seasonal vegetables, and lemon butter", price: "₹950" },
      { name: "Paneer Tikka Masala", description: "Cottage cheese in rich tomato gravy with naan", price: "₹550" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Gulab Jamun", description: "Classic Indian sweet dumplings in rose syrup", price: "₹250" },
      { name: "Chocolate Fondant", description: "Warm chocolate cake with vanilla ice cream", price: "₹350" },
      { name: "Payasam", description: "Traditional South Indian rice pudding with cardamom", price: "₹200" },
    ],
  },
]

export function MenuHighlights() {
  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent uppercase tracking-widest text-sm font-medium">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Culinary Highlights
          </h2>
          <p className="text-muted-foreground">
            A taste of our carefully curated menu featuring local favorites and international classics.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div key={category.title} className="bg-card rounded-xl p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-foreground">{item.name}</h4>
                      <span className="text-accent font-semibold">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
