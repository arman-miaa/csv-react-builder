export default function FaqSection() {
  return (
    <div id="faq" className="container mx-auto py-12 md:py-32 lg:px-32">
      <div className="bg-white p-8 md:p-20 lg:p-28">
        <h3 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-8">
          Frequently asked questions
        </h3>
        <div className="space-y-0">
          <div className="collapse collapse-arrow bg-base-100 border-t border-b border-l-0 border-r-0 first:border-t-0 last:border-b-0 border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              Do plumbers deal with heating?
            </div>
            <div className="collapse-content text-sm">
              Some of our local plumbers are also gas registered and experienced
              working on heating systems, bathrooms and kitchens.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-t border-b border-l-0 border-r-0 first:border-t-0 last:border-b-0 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Do you charge a call out fee?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-t border-b border-l-0 border-r-0 first:border-t-0 last:border-b-0 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How quickly can your company send out an engineer?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border-t border-b border-l-0 border-r-0 first:border-t-0 last:border-b-0 border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What should I do if I get a water leak?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
