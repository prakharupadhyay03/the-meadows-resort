import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Bed, 
  Check, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Mail, 
  Send,
  AlertCircle,
  Sparkles,
  Info
} from 'lucide-react';
import { PageHero } from '../components/common/PageHero';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { roomsData } from '../data/roomsData';
import { resortInfo } from '../data/resortInfo';

export const BookPage = () => {
  const [searchParams] = useSearchParams();
  const requestedRoomSlug = searchParams.get('room');

  // Today's date string YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];
  
  // Tomorrow's date string
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    checkIn: todayStr,
    checkOut: tomorrowStr,
    adults: 2,
    children: 0,
    roomSlug: requestedRoomSlug || 'deluxe-cottage',
    guestName: '',
    email: '',
    phone: '',
    requests: '',
    transportRequired: false
  });

  const [dateError, setDateError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync if query param changes
  useEffect(() => {
    if (requestedRoomSlug && roomsData.some(r => r.slug === requestedRoomSlug)) {
      setFormData(prev => ({ ...prev, roomSlug: requestedRoomSlug }));
    }
  }, [requestedRoomSlug]);

  // Selected room object
  const selectedRoom = roomsData.find(r => r.slug === formData.roomSlug) || roomsData[0];

  // Calculate nights
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 1;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const nights = calculateNights();

  const handleDateChange = (field, value) => {
    setDateError('');
    const newForm = { ...formData, [field]: value };
    
    if (field === 'checkIn' && newForm.checkOut && value >= newForm.checkOut) {
      // Auto-advance checkout to the next day
      const nextDay = new Date(value);
      nextDay.setDate(nextDay.getDate() + 1);
      newForm.checkOut = nextDay.toISOString().split('T')[0];
    } else if (field === 'checkOut' && newForm.checkIn && value <= newForm.checkIn) {
      setDateError('Check-out date must be after check-in date.');
    }

    setFormData(newForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nights <= 0) {
      setDateError('Please ensure check-out date is at least one night after check-in.');
      return;
    }

    setSubmittedData({
      ...formData,
      nights,
      selectedRoomTitle: selectedRoom.title,
      referenceNo: `TMR-${Math.floor(100000 + Math.random() * 900000)}`
    });
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="bg-ivory text-charcoal">
      {/* 1. Page Hero */}
      <PageHero
        title="Reserve Your Stay"
        subtitle="Submit a direct reservation enquiry for The Meadows Resort & Spa. Guaranteed best rates and personalized service."
        eyebrow="Booking Concierge"
        image="/images/resort-gallery/resort/resort-01.jpg"
        breadcrumbs={[{ label: 'Book Your Stay' }]}
        height="tall"
      />

      {/* 2. Main Booking Interface */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 lg:px-12">
        {submitted && submittedData ? (
          /* Confirmation Receipt State */
          <div className="max-w-3xl mx-auto bg-ivory border-2 border-sage-500 p-8 sm:p-12 rounded-sm shadow-xl space-y-6">
            <div className="flex items-center space-x-3 text-sage-600">
              <div className="p-3 bg-sage-100 rounded-full">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] tracking-loose-luxury uppercase font-semibold text-sage-600 block">
                  Enquiry Transmitted Successfully
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-botanical font-medium">
                  Reservation Enquiry Reference #{submittedData.referenceNo}
                </h2>
              </div>
            </div>

            <div className="p-4 bg-beige/60 border border-taupe/30 rounded-sm text-xs sm:text-sm text-charcoal leading-relaxed">
              <p>
                Dear <strong>{submittedData.guestName}</strong>, thank you for choosing The Meadows Resort &amp; Spa. 
                Your booking enquiry for <strong>{submittedData.selectedRoomTitle}</strong> has been delivered directly to our reservations team at <a href={`mailto:${resortInfo.emails.reservations}`} className="underline font-semibold">{resortInfo.emails.reservations}</a>.
              </p>
              <p className="mt-2 text-taupe-dark">
                <em>*Notice: This is a formal enquiry submission. To protect your payment details, no charges have been deducted online. Our reservations manager will contact you within 2 to 4 hours with live room confirmation, check-in instructions, and payment assistance.</em>
              </p>
            </div>

            {/* Reservation Summary Card */}
            <div className="border border-taupe/20 p-6 rounded-sm bg-ivory space-y-3 text-xs">
              <h4 className="font-serif text-lg text-botanical font-medium border-b border-taupe/20 pb-2">
                Enquiry Summary
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                <div>
                  <span className="text-charcoal-muted block">Check-in:</span>
                  <strong className="text-charcoal text-sm">{submittedData.checkIn}</strong>
                </div>
                <div>
                  <span className="text-charcoal-muted block">Check-out:</span>
                  <strong className="text-charcoal text-sm">{submittedData.checkOut}</strong>
                </div>
                <div>
                  <span className="text-charcoal-muted block">Duration:</span>
                  <strong className="text-charcoal text-sm">{submittedData.nights} Night{submittedData.nights > 1 ? 's' : ''}</strong>
                </div>
                <div>
                  <span className="text-charcoal-muted block">Guests:</span>
                  <strong className="text-charcoal text-sm">{submittedData.adults} Adults, {submittedData.children} Children</strong>
                </div>
              </div>

              <div className="pt-3 border-t border-taupe/15 flex justify-between items-center text-xs">
                <span>Selected Accommodation:</span>
                <strong className="text-botanical text-sm">{submittedData.selectedRoomTitle}</strong>
              </div>

              {submittedData.requests && (
                <div className="pt-2 text-xs">
                  <span className="text-charcoal-muted">Special Requests:</span>
                  <p className="text-charcoal italic mt-0.5">{submittedData.requests}</p>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-taupe/20">
              <p className="text-xs text-charcoal-muted">
                Need urgent assistance? Call our desk directly at <a href={`tel:${resortInfo.phones.primary}`} className="text-sage-600 font-semibold">{resortInfo.phones.primary}</a>
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                size="sm"
              >
                Submit Another Enquiry
              </Button>
            </div>
          </div>
        ) : (
          /* Active Booking Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-8 bg-ivory border border-taupe/30 p-8 sm:p-12 rounded-sm shadow-md">
              <div className="border-b border-taupe/20 pb-4 mb-8">
                <span className="text-xs font-semibold tracking-loose-luxury uppercase text-sage-600 block mb-1">
                  Step 1 of 1 • Direct Reservation
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-botanical font-normal">
                  Guest Reservation Enquiry
                </h2>
                <p className="text-xs sm:text-sm text-charcoal-muted font-light mt-1">
                  Enjoy best direct rates, zero hidden platform fees, and dedicated concierge assistance for your trip to Aurangabad.
                </p>
              </div>

              {dateError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{dateError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* 1. Dates & Guests Block */}
                <div>
                  <h3 className="font-serif text-xl text-botanical font-medium mb-4 flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-sage-600" />
                    <span>Travel Dates &amp; Party Size</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={todayStr}
                        value={formData.checkIn}
                        onChange={(e) => handleDateChange('checkIn', e.target.value)}
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        required
                        min={formData.checkIn || todayStr}
                        value={formData.checkOut}
                        onChange={(e) => handleDateChange('checkOut', e.target.value)}
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Adults (12+ Yrs)
                      </label>
                      <select
                        value={formData.adults}
                        onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) })}
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      >
                        <option value={1}>1 Adult</option>
                        <option value={2}>2 Adults</option>
                        <option value={3}>3 Adults</option>
                        <option value={4}>4 Adults</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Children (0-11 Yrs)
                      </label>
                      <select
                        value={formData.children}
                        onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) })}
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      >
                        <option value={0}>0 Children</option>
                        <option value={1}>1 Child</option>
                        <option value={2}>2 Children</option>
                        <option value={3}>3 Children</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 2. Room Category Selection */}
                <div>
                  <h3 className="font-serif text-xl text-botanical font-medium mb-4 flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-sage-600" />
                    <span>Select Preferred Cottage or Suite *</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roomsData.map((room) => {
                      const isSelected = formData.roomSlug === room.slug;

                      return (
                        <div
                          key={room.id}
                          onClick={() => setFormData({ ...formData, roomSlug: room.slug })}
                          className={`p-4 rounded-sm border-2 cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                            isSelected
                              ? 'border-sage-500 bg-beige/40 shadow-sm ring-1 ring-sage-300'
                              : 'border-taupe/20 bg-ivory hover:border-taupe/50'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <span className="text-[9px] uppercase tracking-luxury text-taupe-dark font-medium block">
                                {room.category}
                              </span>
                              <h4 className="font-serif text-lg text-botanical font-medium">
                                {room.title}
                              </h4>
                            </div>
                            <span className="text-xs font-semibold text-sage-600">
                              {room.priceEstimate.replace('Starting from ', '')}
                            </span>
                          </div>

                          <div className="mt-2 text-[11px] text-charcoal-muted space-y-0.5 font-light">
                            <p>{room.size} • {room.bed}</p>
                            <p className="truncate text-taupe-dark">{room.view}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Primary Guest Information */}
                <div>
                  <h3 className="font-serif text-xl text-botanical font-medium mb-4 flex items-center space-x-2">
                    <Users className="w-4 h-4 text-sage-600" />
                    <span>Primary Guest Details</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Guest Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.guestName}
                        onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                        placeholder="e.g. Alok Singhania"
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alok@example.com"
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-luxury text-charcoal font-semibold mb-2">
                    Additional Requests &amp; Notes
                  </label>
                  <textarea
                    rows="3"
                    value={formData.requests}
                    onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                    placeholder="e.g. Airport pick-up from Aurangabad IXU airport, pond-facing cottage preference, anniversary arrangement..."
                    className="w-full bg-beige/30 border border-taupe/40 px-3.5 py-2.5 text-xs text-charcoal focus:outline-none focus:border-sage-500 rounded-sm"
                  />
                </div>

                {/* Submit Row */}
                <div className="pt-4 border-t border-taupe/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-charcoal-muted space-y-1">
                    <p className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-sage-600" />
                      <span>Best direct booking rate assurance</span>
                    </p>
                    <p className="text-[11px] text-taupe-dark">
                      Zero advance online payment required to submit enquiry.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Transmit Reservation Enquiry
                  </Button>
                </div>

              </form>
            </div>

            {/* Sticky Sidebar Column: Selected Room Preview & Direct Perks */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="bg-beige/60 border border-taupe/30 p-6 rounded-sm space-y-5">
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-beige">
                  <img
                    src={selectedRoom.heroImage}
                    alt={selectedRoom.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-botanical/90 text-white px-2.5 py-0.5 text-[10px] tracking-luxury uppercase">
                    {selectedRoom.category}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-botanical font-medium">
                    {selectedRoom.title}
                  </h3>
                  <p className="text-xs text-sage-600 font-medium mt-0.5">
                    {selectedRoom.priceEstimate}
                  </p>
                  <p className="text-xs text-charcoal-muted font-light mt-2 line-clamp-2">
                    {selectedRoom.overview}
                  </p>
                </div>

                {/* Booking Estimate */}
                <div className="p-4 bg-ivory rounded-sm border border-taupe/20 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-charcoal-muted">
                    <span>Stay Duration:</span>
                    <strong className="text-charcoal font-medium">{nights} Night{nights > 1 ? 's' : ''}</strong>
                  </div>
                  <div className="flex justify-between items-center text-charcoal-muted">
                    <span>Guests:</span>
                    <strong className="text-charcoal font-medium">{formData.adults} Adults, {formData.children} Children</strong>
                  </div>
                  <div className="flex justify-between items-center text-charcoal-muted pt-2 border-t border-taupe/15">
                    <span>Complimentary Wi-Fi &amp; Parking:</span>
                    <strong className="text-sage-600">Included</strong>
                  </div>
                </div>

                {/* Direct Booking Advantages */}
                <div className="space-y-2 pt-2 border-t border-taupe/20 text-xs text-charcoal-muted font-light">
                  <span className="text-[10px] font-sans tracking-luxury uppercase text-taupe-dark font-semibold block">
                    Direct Booking Privileges:
                  </span>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                    <span>Personalized cottage orientation on arrival</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                    <span>Complimentary morning botanical garden walk</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Check className="w-3.5 h-3.5 text-sage-600 shrink-0 mt-0.5" />
                    <span>Ellora Caves concierge transfer assistance</span>
                  </div>
                </div>

                {/* Direct Phone Assistance */}
                <div className="pt-2 text-xs text-charcoal text-center bg-ivory p-3 rounded-sm border border-taupe/20">
                  <span className="text-charcoal-muted block">Prefer speaking with a human?</span>
                  <a href={`tel:${resortInfo.phones.primary}`} className="text-sage-600 font-semibold text-sm hover:underline">
                    {resortInfo.phones.primary}
                  </a>
                </div>

              </div>
            </div>

          </div>
        )}
      </section>
    </div>
  );
};

export default BookPage;
