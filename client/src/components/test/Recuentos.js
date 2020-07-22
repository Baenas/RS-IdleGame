import React, { Component } from 'react';

class Recuentos extends Component {

    render() {
        return (
            <div>
                <table class="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>No Name Specified</td>
                            <td>Unknown</td>
                            <td class="negative">None</td>
                        </tr>
                        <tr class="positive">
                            <td>Jimmy</td>
                            <td><i class="icon checkmark"></i> Approved</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>Jamie</td>
                            <td>Unknown</td>
                            <td class="positive"><i class="icon close"></i> Requires call</td>
                        </tr>
                        <tr class="negative">
                            <td>Jill</td>
                            <td>Unknown</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }

}


export default Recuentos