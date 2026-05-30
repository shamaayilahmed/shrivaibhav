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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1021957562034!2d78.6765446!3d10.8034844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5c8ae7408ef%3A0xff3c0fa5c05aaef9!2sShri%20Vaibhav!5e0!3m2!1sen!2sin!4v1780165168894!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          title="Shri Vaibhav Hotels Location"
          referrerPolicy="no-referrer-when-downgrade"/>
      </div>
    </section>
  )
}
