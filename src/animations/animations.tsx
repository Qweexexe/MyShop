import Swal from "sweetalert2";

export const registerSuccess = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'You have been registered',
        showConfirmButton: false,
        timer: 1500
    })
}


export const registerError = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Sorry, but this user is already exists',
        showConfirmButton: false,
        timer: 1500
    })
}

export const loginSuccess = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 1500
    })
}

export const loginError = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Invalid inputs',
        showConfirmButton: false,
        timer: 1500
    })
}

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})


export const registerFillError = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'All inputs must be filled',
        showConfirmButton: false,
        timer: 1500
    })
}
export const addCart = () => {
    Toast.fire({
        icon: 'success',
        title: 'Added to card'
    })
}


export const BuyAnimation = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for order :)',
        text: 'Try to Login or Register to see more :)',
        showConfirmButton: false,
        timer: 3000
    })
}