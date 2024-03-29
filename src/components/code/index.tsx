import React, { useEffect, useState } from "react";
import './style.scss'




const Code: React.FC<any> = () => {


    const [code, setCode] = useState('code')
    const getOtp = () => {
        if ('OTPCredential' in window) {
            setCode('1. supported ')
            window.addEventListener('DOMContentLoaded', e => {
                const input = document.querySelector('input[autocomplete="one-time-code"]') as any;
                if (!input) return;
                const ac = new AbortController();
                setCode(old=>old+'2. before get aborted: ' + ac.signal.aborted+' reason: '+ac.signal.reason)
                navigator.credentials.get({
                    otp: { transport: ['sms'] },
                    signal: ac.signal
                } as any).then((otp: any) => {
                    setCode(old=>' 3. '+otp.code)
                    input.value = otp.code;
                    ac.abort();
                }).catch(err => {
                    setCode(old=>old+ '4. error: ' + err.toString())
                    console.log(err);
                }).finally(() => setCode(old=>old+' 5. finaly'))
            });
        } else {
            setCode('not supported')

        }
    }
    useEffect(() => {
        getOtp();
    }, [])



    return (
        <div className="home-page">
            <div className="page-header">
                <div>
                    <form>
                        <h1>{code}</h1>
                        <input autoComplete="one-time-code" required />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Code;
