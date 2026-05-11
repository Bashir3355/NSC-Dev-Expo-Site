export default function ContactSuccessMessage() {
  return (
    <section className="max-w-sm mx-auto rounded-2xl overflow-hidden bg-[#f1f1f1] shadow-lg">
      
      {/* Success Content */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white p-6">
        <h2 className="text-3xl font-bold mb-3">
          Your submission was successful!
        </h2>

        <p className="text-gray-200 text-lg">
          We here look forward towards working with you!
        </p>
      </div>

      {/* Illustration Area */}
      <div className="h-72 flex items-center justify-center text-gray-500 text-sm">
        Happy graphic illustration*
      </div>
    </section>
  );
}