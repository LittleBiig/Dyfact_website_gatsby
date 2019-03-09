import React from 'react';

const EmptyPlace = (props) => (
    <div style={{backgroundImage:`url(${props.image})`}} class="empty-place">
    </div>
);

export default EmptyPlace;