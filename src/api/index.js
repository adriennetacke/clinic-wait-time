const fakeDatabase = {
    providers: [
        {
            clinicId: 1,
            fullName: 'Jon Snow MD',
            hours: 0,
            minutes: 20,
            isUrgentCare: false
        },
        {
            clinicId: 1,
            fullName: 'Sansa Stark MD',
            hours: 0,
            minutes: 30,
            isUrgentCare: false
        },
        {
            clinicId: 1,
            fullName: 'Arya Stark MD',
            hours: 0,
            minutes: 15,
            isUrgentCare: false
        },
        {
            clinicId: 2,
            fullName: 'Bran Stark MD',
            hours: 0,
            minutes: 20,
            isUrgentCare: true
        },
        {
            clinicId: 1,
            fullName: 'Ned Stark MD',
            hours: 0,
            minutes: 0,
            isUrgentCare: false
        },
        {
            clinicId: 1,
            fullName: 'Catelyn Stark MD',
            hours: 0,
            minutes: 0,
            isUrgentCare: true
        }
    ]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function getProviders (clinicId) {
    return delay(500).then(() => {
        return fakeDatabase.providers.filter((provider) =>
            provider.clinicId === clinicId);
        });
}
