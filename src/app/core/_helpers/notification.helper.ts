declare var $:any;

/**
 * Class to create notifications
 */
export class Notification {

    /**
     * Method creates a notification
     * @param message 
     * @param type 
     */
    static notify(message:string = '', type:string = 'error') {
        const types = {
            error: {
                icon: 'ti-close',
                color: 'danger'
            },
            info: {
                icon: 'ti-announcement',
                color: 'info'
            },
            success: {
                icon: 'ti-check',
                color: 'success'
            },
            alert: {
                icon: 'ti-alert',
                color: 'warning'
            },
            greetings: {
                icon: 'ti-power-off',
                color: 'success'
            }
        };
    
        let notifyType = types[type];
    
        $.notify({
            icon: notifyType.icon,
            message: message
        }, { type: notifyType.color });
    }
}