import React, { useState, useEffect, useRef } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const SubscribeSection = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const timeoutRef = useRef(null);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleSubscribe = async () => {
        if (!email) return;
        
        try {
            const CONVERTKIT_FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
            const CONVERTKIT_API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;
            
            const response = await fetch(`https://api.convertkit.com/v3/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_secret: CONVERTKIT_API_KEY,
                email: email,
            }),
            });

            if (response.ok) {
            // Clear email first
            setEmail('');
            // Then update subscribed state
            // Use callback form to ensure we're working with latest state
            setSubscribed(true);
            } else {
            const data = await response.json();
            console.error('ConvertKit error:', data);
            alert('Hubo un error. Por favor intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error subscribing:', error);
            alert('Hubo un error. Por favor intenta de nuevo.');
        }
    };

    return (
        <section id="subscribe" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <Mail className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Recibe Nuevos Estudios en tu Email
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                    Suscríbete para recibir notificaciones cuando publiquemos nuevos artículos y diagramas
                </p>
                
                {!subscribed ? (
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                                placeholder="Ingresa tu correo electrónico"
                                className="flex-1 px-6 py-3 rounded-lg text-white bg-blue-700 placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white focus:bg-blue-600"
                                disabled={isSubmitting}
                            />
                            <button
                                onClick={handleSubscribe}
                                disabled={isSubmitting}
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Suscribirse'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="max-w-md mx-auto bg-green-500 text-white px-6 py-4 rounded-lg">
                        <div className="flex items-center justify-center gap-3 mb-2">
                            <CheckCircle size={24} />
                            <span className="font-semibold">¡Gracias por suscribirte!</span>
                        </div>
                        <p className="text-sm text-center text-green-50">
                            Revisa tu correo para confirmar tu suscripción
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SubscribeSection;