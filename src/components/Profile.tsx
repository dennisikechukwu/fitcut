import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-5xl mx-auto items-stretch">
      {/* Left: Profile Image */}
      <div className="relative w-full h-full rounded-xl overflow-hidden min-h-[400px]">
        <Image
          src="/issac.jpg"
          alt="Issac Chukwumezie"
          fill
          className="object-cover"
          sizes="(max-width: 800px) 150vw, 50vw"
          priority
        />
      </div>

      {/* Right: Info Cards */}
      <div className="bg-white rounded-xl shadow p-6 border border-gray-200 flex flex-col justify-between">
        <div>
          {/* Name + Role */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Issac Chukwumeze</h2>
            <p className="text-gray-500">Teacher</p>
          </div>

          {/* Card Sections */}
          <div className="space-y-4">
            {[
              {
                title: "Schedule",
                items: [
                  "4 days/week committed",
                  "Early AM preferred",
                  "Travels frequently for work",
                ],
              },
              {
                title: "Equipment",
                items: ["Gym membership access", "Home resistance bands"],
              },
              {
                title: "Injuries",
                items: ["Mild shoulder discomfort", "Fully recovered ankle injury"],
              },
              {
                title: "Goal",
                items: [
                  "Consistent workout routine",
                  "Build gym confidence",
                  "lose weight",
                ],
              },
              {
                title: "Qualifications",
                items: [
                  "BTEC Level 3 Extended Diploma in Sport coaching and development"
                  
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-700 mb-1">{section.title}</h3>
                <ul className=" text-gray-600 space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>+ {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
