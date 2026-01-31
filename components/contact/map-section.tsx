export function MapSection() {
  return (
    <section className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Find Us
          </h2>
          <p className="text-muted-foreground">
            Conveniently located in the heart of Tiruchirappalli
          </p>
        </div>
      </div>
      <div className="h-[400px] w-full bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.4254370469!2d78.61964874683468!3d10.804973476893966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf50ff2aecdad%3A0x6de02c3bedbbaea6!2sTiruchirappalli%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1706900000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shri Vaibhav Hotels Location"
        />
      </div>
    </section>
  )
}
