import zxcvbn from "zxcvbn";

export default function PasswordStrength({ password }: { password: string }) {
    return (
        <div className="flex flex-row justify-between items-center gap-4">
            <div className={'grid grid-cols-4 gap-4 h-1 w-full'}>
                        <span className={'relative bg-secondary rounded-full h-full'}>
                            <span className={`absolute bg-red-500 rounded-full h-full ${zxcvbn(password).score > 0 ? 'w-full' : 'w-0'} duration-300 transition-all`}/>
                        </span>
                <span className={'relative bg-secondary rounded-full h-full'}>
                            <span className={`absolute bg-yellow-500 rounded-full h-full ${zxcvbn(password).score > 1 ? 'w-full' : 'w-0'} duration-300 transition-all`}/>
                        </span>
                <span className={'relative bg-secondary rounded-full h-full'}>
                            <span className={`absolute bg-yellow-500 rounded-full h-full ${zxcvbn(password).score > 2 ? 'w-full' : 'w-0'} duration-300 transition-all`}/>
                        </span>
                <span className={'relative bg-secondary rounded-full h-full'}>
                            <span className={`absolute bg-green-500 rounded-full h-full ${zxcvbn(password).score > 3 ? 'w-full' : 'w-0'} duration-300 transition-all`}/>
                        </span>
            </div>
            <span className={`text-sm font-light ${zxcvbn(password).score > 3 ? 'text-green-500' : zxcvbn(password).score > 2 ? 'text-yellow-500' : zxcvbn(password).score > 1 ? 'text-yellow-500' : zxcvbn(password).score > 0 ? 'text-red-500' : ''}`}>Strong</span>
        </div>
    );
}